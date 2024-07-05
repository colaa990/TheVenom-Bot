const games = {};

function handleGameCommand(message) {
  const user = message.from; // Replace with the user's WhatsApp ID
  const command = message.body.trim();

  if (command === '.حجره') {
    return {
      text: `مرحباً بك في لعبة حجره ورقه مقص! 🎉`,
      buttons: [
        { text: 'مكعبة 🌎', value: 'مكعبة' },
        { text: 'ورقة 📝', value: 'ورقة' },
        { text: 'مقص ✂️', value: 'مقص' }
      ]
    };
  } else if (command.startsWith('.حجره ')) {
    const choice = command.substring(6).trim();
    if (choice === 'مكعبة' || choice === 'ورقة' || choice === 'مقص') {
      const opponentChoice = getRandomChoice();
      const result = determineWinner(choice, opponentChoice);
      return `لقد اخترت ${getEmoji(choice)}, واخترت الخصم ${getEmoji(opponentChoice)}. ${result}`;
    } else {
      return 'اختيار غير صحيح! 😕';
    }
  }
  return '';
}

function getRandomChoice() {
  const choices = ['مكعبة', 'ورقة', 'مقص'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(userChoice, opponentChoice) {
  if (userChoice === opponentChoice) {
    return 'تعادلنا! 🤝';
  }

  switch (userChoice) {
    case 'مكعبة':
      return opponentChoice === 'مقص'? 'فازت! 🎉' : 'فاز الخصم! 😊';
    case 'ورقة':
      return opponentChoice === 'مكعبة'? 'فازت! 🎉' : 'فاز الخصم! 😊';
    case 'مقص':
      return opponentChoice === 'ورقة'? 'فازت! 🎉' : 'فاز الخصم! 😊';
    default:
      return 'اختيار غير صحيح! 😕';
  }
}

function getEmoji(choice) {
  switch (choice) {
    case 'مكعبة':
      return '🌎';
    case 'ورقة':
      return '📝';
    case 'مقص':
      return '✂️';
    default:
      return '';
  }
}

// Example usage:
const message = {
  from: '1234567890', // Replace with the user's WhatsApp ID
  body: '.حجره' // Replace with the user's message
};

const response = handleGameCommand(message);
console.log(response);
