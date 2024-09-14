import cohere
import os
from dotenv import load_dotenv

load_dotenv()

COHERE_API_KEY = os.getenv('COHERE_API_KEY')

co = cohere.Client(COHERE_API_KEY)

def argue(argue_style, previous_conversation):
	PROMPT = f'''You are a professional debater. You are losing the following debate but it it life-or-death, you MUST win. You must not provide anything else but the argument. What should the rest of my argument be, if I'm arguing in the style of {argue_style}? I've provided the argument so far: {previous_conversation}'''
	response = co.chat(message=PROMPT)
	return response

print(argue('Donald Trump', '''DAVID MUIR: Tonight, the high-stakes showdown here in Philadelphia between Vice President Kamala Harris and former president Donald Trump. Their first face-to-face meeting in this presidential election. Their first face-to-face meeting ever.

LINSEY DAVIS: A historic race for president upended just weeks ago. President Biden withdrawing after his last debate. Donald Trump is now up against a new opponent.

DAVID MUIR: The candidates separated by the smallest of margins. Essentially tied in the polls nationally. And in the key battlegrounds, including right here in Pennsylvania, all still very much in play. The ABC News Presidential Debate starts right now.

DAVID MUIR: Good evening, I'm David Muir. And thank you for joining us for tonight's ABC News Presidential Debate. We want to welcome viewers watching on ABC and around the world tonight. Vice President Kamala Harris and President Donald Trump are just moments away from taking the stage in this unprecedented race for president.

LINSEY DAVIS: And I'm Linsey Davis. Tonight's meeting could be the most consequential event of their campaigns, with Election Day now less than two months away. For Vice President Kamala Harris, this is her first debate since President Biden withdrew from the race on July 21st. Of course, that decision followed his debate against President Donald Trump in June. Since then, this race has taken on an entirely new dynamic.

DAVID MUIR: And that brings us to the rules of tonight's debate: 90 minutes with two commercial breaks. No topics or questions have been shared with the campaigns. The candidates will have two minutes to answer questions. And this is the clock. That's what they'll be seeing. Two minutes for rebuttals and one minute for follow-ups, clarifications or responses. Their microphones will only be turned on when it's their turn to speak. No prewritten notes allowed. There is no audience here tonight in this hall at the National Constitution Center. This is an intimate setting for two candidates who have never met.

LINSEY DAVIS: President Trump won the coin toss. He chose to deliver the final closing statement of the evening. Vice President Harris selected the podium to the right.

DAVID MUIR: So let's now welcome the candidates to the stage. Vice President Kamala Harris and President Donald Trump.

VICE PRESIDENT KAMALA HARRIS: Kamala Harris. Let's have a good debate.

FORMER PRESIDENT DONALD TRUMP: Nice to see you. Have fun.

VICE PRESIDENT KAMALA HARRIS: Thank you.

FORMER PRESIDENT DONALD TRUMP: Thank you.

DAVID MUIR: Welcome to you both. It's wonderful to have you. It's an honor to have you both here tonight.

LINSEY DAVIS: Good evening, we are looking forward to a spirited and thoughtful debate.

DAVID MUIR: So let's get started. I want to begin tonight with the issue voters repeatedly say is their number one issue, and that is the economy and the cost of living in this country. Vice President Harris, you and President Trump were elected four years ago and your opponent on the stage here tonight often asks his supporters, are you better off than you were four years ago? When it comes to the economy, do you believe Americans are better off than they were four years ago?

VICE PRESIDENT KAMALA HARRIS: So, I was raised as a middle-class kid. And I am actually the only person on this stage who has a plan that is about lifting up the middle class and working people of America. I believe in the ambition, the aspirations, the dreams of the American people. And that is why I imagine and have actually a plan to build what I call an opportunity economy. Because here's the thing. We know that we have a shortage of homes and housing, and the cost of housing is too expensive for far too many people. We know that young families need support to raise their children. And I intend on extending a tax cut for those families of $6,000, which is the largest child tax credit that we have given in a long time. So that those young families can afford to buy a crib, buy a car seat, buy clothes for their children. My passion, one of them, is small businesses. I was actually -- my mother raised my sister and me but there was a woman who helped raise us. We call her our second mother. She was a small business owner. I love our small businesses. My plan is to give a $50,000 tax deduction to start-up small businesses, knowing they are part of the backbone of America's economy. My opponent, on the other hand, his plan is to do what he has done before, which is to provide a tax cut for billionaires and big corporations, which will result in $5 trillion to America's deficit. My opponent has a plan that I call the Trump sales tax, which would be a 20% tax on everyday goods that you rely on to get through the month. Economists have said that Trump's sales tax would actually result for middle-class families in about $4,000 more a year because of his policies and his ideas about what should be the backs of middle-class people paying for tax cuts for billionaires.

DAVID MUIR: President Trump, I'll give you two minutes.

FORMER PRESIDENT DONALD TRUMP: First of all, I have no sales tax. That's an incorrect statement. She knows that. We're doing tariffs on other countries. Other countries are going to finally, after 75 years, pay us back for all that we've done for the world. And the tariff will be substantial in some cases. I took in billions and billions of dollars, as you know, from China. In fact, they never took the tariff off because it was so much money, they can't. It would totally destroy everything that they've set out to do. They've taken in billions of dollars from China and other places. They've left the tariffs on. When I had it, I had tariffs and yet I had no inflation. Look, we've had a terrible economy because inflation has -- which is really known as a country buster. It breaks up countries. We have inflation like very few people have ever seen before. Probably the worst in our nation's history. We were at 21%. But that's being generous because many things are 50, 60, 70, and 80% higher than they were just a few years ago. This has been a disaster for people, for the middle class, but for every class. On top of that, we have millions of people pouring into our country from prisons and jails, from mental institutions and insane asylums. And they're coming in and they're taking jobs that are occupied right now by African Americans and Hispanics and also unions. Unions are going to be affected very soon. And you see what's happening. You see what's happening with towns throughout the United States. You look at Springfield, Ohio. You look at Aurora in Colorado. They are taking over the towns. They're taking over buildings. They're going in violently. These are the people that she and Biden let into our country. And they're destroying our country. They're dangerous. They're at the highest level of criminality. And we have to get them out. We have to get them out fast. I created one of the greatest economies in the history of our country. I'll do it again and even better.

DAVID MUIR: We are going to get to immigration and border security during this debate. But I would like to let Vice President Harris respond on the economy here.

VICE PRESIDENT KAMALA HARRIS: Well, I would love to. Let's talk about what Donald Trump left us. Donald Trump left us the worst unemployment since the Great Depression. Donald Trump left us the worst public health epidemic in a century. Donald Trump left us the worst attack on our democracy since the Civil War. And what we have done is clean up Donald Trump's mess. What we have done and what I intend to do is build on what we know are the aspirations and the hopes of the American people. But I'm going to tell you all, in this debate tonight, you're going to hear from the same old, tired playbook, a bunch of lies, grievances and name-calling. What you're going to hear tonight is a detailed and dangerous plan called Project 2025 that the former president intends on implementing if he were elected again. I believe very strongly that the American people want a president who understands the importance of bringing us together knowing we have so much more in common than what separates us. And I pledge to you to be a president for all Americans.

DAVID MUIR: President Trump, I'll give you a minute here to respond.

FORMER PRESIDENT DONALD TRUMP: Number one, I have nothing to do, as you know and as she knows better than anyone, I have nothing to do with Project 2025. That's out there. I haven't read it. I don't want to read it, purposely. I'm not going to read it. This was a group of people that got together, they came up with some ideas. I guess some good, some bad. But it makes no difference. I have nothing to do -- everybody knows I'm an open book. Everybody knows what I'm going to do. Cut taxes very substantially. And create a great economy like I did before. We had the greatest economy. We got hit with a pandemic. And the pandemic was, not since 1917 where 100 million people died has there been anything like it? We did a phenomenal job with the pandemic. We handed them over a country where the economy and where the stock market was higher than it was before the pandemic came in. Nobody's ever seen anything like it. We made ventilators for the entire world. We got gowns. We got masks. We did things that nobody thought possible. And people give me credit for rebuilding the military. They give me credit for a lot of things. But not enough credit for the great job we did with the pandemic. But the only jobs they got were bounce-back jobs. These were jobs, bounce back. And it bounced back and it went to their benefit. But I was the one that created them. They know it and so does everybody else.

DAVID MUIR: Vice President Harris, I'll let you respond.

VICE PRESIDENT KAMALA HARRIS: So, Donald Trump has no plan for you. And when you look at his economic plan, it's all about tax breaks for the richest people. I am offering what I describe as an opportunity economy, and the best economists in our country, if not the world, have reviewed our relative plans for the future of America. What Goldman Sachs has said is that Donald Trump's plan would make the economy worse. Mine would strengthen the economy. What the Wharton School has said is Donald Trump's plan would actually explode the deficit. Sixteen Nobel laureates have described his economic plan as something that would increase inflation and by the middle of next year would invite a recession. You just have to look at where we are and where we stand on the issues. And I'd invite you to know that Donald Trump actually has no plan for you, because he is more interested in defending himself than he is in looking out for you.'''))

