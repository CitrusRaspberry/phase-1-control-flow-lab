function scuberGreetingForFeet(ft){
  if (ft <= 400) {
    return 'This one is on me!';
  } else if (ft > 2500) {
    return 'No can do.';
  } else if (ft > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city){
  if (city === "NYC") {
    return 'Ok, sounds good.';
  } else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tipAmount){
  switch(tipAmount) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
  }
}
