const scores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

function winningPair(hand1, hand2) {
  if (hand1[0] === hand1[1] && hand2[0] !== hand2[1]) {
  return hand1
} else if (hand2[0] === hand2[1] && hand1[0] !== hand1[1]) {
  return hand2
  } else if (hand1[0] === hand1[1] && hand2[0] === hand2[1]) {
  let winner = hand1
  if (scores.indexOf(hand2[0]) > scores.indexOf(hand1[0])) {
    winner = hand2
  }
  return winner
} else {
      return []
  }
}

// Extension criteria

function pairScore(hand) {
  let pair = []
  if (hand[0] === hand[1]) {
    pair = [hand[0], hand[1]]
  } else if (hand[0] === hand[2]) {
    pair = [hand[0], hand[2]]
  } else {
    pair = [hand[1], hand[2]]
  }
  score = scores.indexOf(pair[0])
  return score
}

function threeScore(hand) {
  score = scores.indexOf(hand[0])
  return score
}

// functions for use below

function winningPairFromArray() {}

function winning3CardHand([...hands]) {
  let matchedThrees = []
  let matchedPairs = []
  for (let i = 0; i < hands.length; i++) {
    if (hands[i].length === 3) {
      if (hands[i][0] === hands[i][1] && hands[i][0] === hands[i][2])
      matchedThrees.push(hands[i])
    }
    if (hands[i].length === 2) {
      if (hands[i][0] === hands[i][1]) {
        matchedPairs.push(hands[i])
      }
    }
  }
  // after for loop, left with arrays populated by any matched threes/pairs if they existed
  if (matchedThrees.length > 0) {
    let winner = []
    leadingScore = 0
    for (let i = 0; i < matchedThrees.length; i++) {
      let score = threeScore(matchedThrees[i])
      if (score > leadingScore) {
        leadingScore = score
        winner = matchedThrees[i]
      }
    }
    return winner
  } else if (matchedPairs.length > 0) {
    let winner = []
    leadingScore = 0
    for (let i = 0; i < matchedPairs.length; i++) {
      let score = pairScore(matchedPairs[i])
      if (score > leadingScore) {
        leadingScore = score
        winner = matchedPairs[i]
      }
    }
    return winner
  } else {
    return []
  }
}

console.log(winning3CardHand([['4', '3'], ['6', '6'], ['7', '7'], ['3', '3']]))

module.exports = {
  winningPair,
  winningPairFromArray : winning3CardHand,
  winning3CardHand
}
