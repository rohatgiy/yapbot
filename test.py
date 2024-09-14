import base64

with open("test.wav", "rb") as file:
	audio_bytes = file.read()

encoded_audio = base64.b64encode(audio_bytes)
back_to_bytes = base64.b64decode(encoded_audio)

with open("out.wav", "wb") as file:
	file.write(back_to_bytes)
