from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
import redis
import cohere
import os
from dotenv import load_dotenv

load_dotenv()
redis_client = redis.StrictRedis(host='localhost', port=6379, db=0)

COHERE_API_KEY = os.getenv('COHERE_API_KEY')

co = cohere.Client(COHERE_API_KEY)

app = Flask(__name__)
CORS(app)

@app.route('/export/<id>', methods=['GET'])


@app.route('/conversation/<id>', methods=['PUT'])
def add_to_converastion(id):
	try:
		data = request.get_json()
		message = data['message']
		if not message:
			response = make_response(jsonify({'id': id, 'empty_message': True}), 200)
			response.headers.add("Access-Control-Allow-Origin", "*")
			return response

		conversation = ''
		created_new_conversation = False
		if redis_client.exists(id):
			conversation = redis_client.get(id).decode('utf-8')
		else:
			created_new_conversation = True

		if conversation and message != '#':
			conversation += '|'
		conversation += message
		
		redis_client.set(id, conversation)

		if created_new_conversation:
			response = make_response(jsonify({'id': id}), 201)
			response.headers.add("Access-Control-Allow-Origin", "*")
			return response
		else:
			response = make_response(jsonify({'id': id}), 200)
			response.headers.add("Access-Control-Allow-Origin", "*")
			return response
	except Exception as e:
		response = make_response(jsonify({'error': str(e)}), 500)
		response.headers.add("Access-Control-Allow-Origin", "*")
		return response
	
def prompt(topic, argue_style, speaker, previous_conversation):
	PROMPT = f'''You are a professional debater and have won the world championships serveral times. You are losing the following debate but it it life-or-death, you MUST win. The debate is on the topic, {topic} which you are an expert in. You are taking on the role of {speaker}. You must not provide anything else but the argument for the {speaker}. What should the rest of your argument be, if you're arguing in the style of {argue_style}? Keep it short and sweet. No more than 1 paragraph. I will provide the argument so far and I want you to provide {speaker}'s next move. The output should be a speech that I can read word-for-word. Here's the argument so far: {previous_conversation}'''
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
			conversation = redis_client.get(id).decode('utf-8')
			context = parse_context(conversation)
		else:
			return jsonify({'error': 'Conversation not found'}), 404
		
		argument = prompt(style, speaker, context)
		
		return jsonify({'arguement': argument}), 200

	except Exception as e:
		return jsonify({'error': str(e)}), 500


def parse_context(conversation: str) :
	conversation = conversation.replace("|"," ")
	arr = conversation.split("#")
	even = True
	user = []
	opp = []
	for i in arr:
		if (even):
			opp.append(i)
		else:
			user.append(i)
		even = not even
	context = ""
	i = 0
	while i < max(len(opp), len(user)):
		if (i < len(opp)):
			context += "Opponent: " + opp[i] + "\n"
		if (i < len(user)):
			context += "User: " + opp[i] + "\n"
		i+= 1
	return context
	
	


if __name__ == '__main__':
	app.run(debug=True, port=8000)