from flask import Flask, request, jsonify
import redis
import cohere
import os
from dotenv import load_dotenv

redis_client = redis.StrictRedis(host='localhost', port=6379, db=0)

COHERE_API_KEY = os.getenv('COHERE_API_KEY')

co = cohere.Client(COHERE_API_KEY)

app = Flask(__name__)

@app.route('/conversation/<id>', methods=['PUT'])
def add_to_converastion(id):
	try:
		data = request.json
		message = data['message']
		
		conversation = ''
		created_new_conversation = False
		if redis_client.exists(id):
			# do i need to decode conversation utf-8?
			conversation = redis_client.get(id)
		else:
			created_new_conversation = True

		if conversation:
			conversation += '|'
		conversation += data['message']
		
		redis_client.set(id, conversation)

		if created_new_conversation:
			return jsonify({'id': id}), 201
		else:
			return jsonify({'id': id}), 200
	except Exception as e:
		return jsonify({'error': str(e)}), 500
	
def prompt(argue_style, speaker, previous_conversation):
	PROMPT = f'''You are a professional debater and have won the world championships serveral times. You are losing the following debate but it it life-or-death, you MUST win. You must not provide anything else but the argument. You are taking on the role of {speaker}. What should the rest of your argument be, if you're arguing in the style of {argue_style}? Here's the argument so far: {previous_conversation}'''
	response = co.chat(message=PROMPT)
	return response.text


@app.route('/argue/<id>', methods=['POST'])
def argue(id):
	try:
		data = request.json
		speaker = data['speaker']
		style = data['style']
		conversation = ''
		if redis_client.exists(id):
			# do i need to decode conversation utf-8?
			conversation = redis_client.get(id)
		else:
			return jsonify({'error': 'Conversation not found'}), 404
		
		argument = prompt(style, speaker, conversation)
		
		return jsonify({'arguement': argument}), 200

	except Exception as e:
		return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
	app.run()