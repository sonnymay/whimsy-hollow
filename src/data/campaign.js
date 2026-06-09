/**
 * Story cases for hero levels. Play order drives Menu "Play" and unlocks.
 */
import { loadCompletedCaseIds, markCaseComplete as persistCaseComplete } from './storage.js';

export const cases = [
  {
    id: 'case-1-mail',
    title: 'Morning Mail Rush',
    client: 'Postmaster Poppy',
    request: 'Find ten lost treasures before the hollow post opens.',
    intro: [
      'The mail garden is already buzzing.',
      'Poppy needs every lost parcel piece back on the table.',
      'Take your time — no timer, just tiny treasures.'
    ],
    outro: [
      'Every item is accounted for.',
      'Poppy ties a thank-you ribbon on the mailbox.',
      'The hollow can open for deliveries.'
    ],
    levelId: 'mail-garden',
    unlockAfter: null,
    hubUnlock: 'books',
    optionalBonusCoins: 50
  },
  {
    id: 'case-2-kitchen',
    title: 'Soup Before Noon',
    client: 'Chef Bramble',
    request: 'Track down kitchen gear before the lunch rush.',
    intro: [
      'Steam fogs the Busy Kitchen windows.',
      'Bramble swears the ladle was here a minute ago.',
      'Open drawers and warm the stove to search everywhere.'
    ],
    outro: [
      'The kitchen hums back to life.',
      'Bramble ladles the first tasting bowl.',
      'You earn a star on the recipe board.'
    ],
    levelId: 'restaurant-kitchen',
    unlockAfter: 'case-1-mail',
    hubUnlock: 'kettle',
    optionalBonusCoins: 50
  },
  {
    id: 'case-3-bookshop',
    title: 'The Missing Chapter',
    client: 'Librarian Moss',
    request: 'Recover scattered bookshop curios before story hour.',
    intro: [
      'Pages rustle in the forest bookshop.',
      'Moss cannot start tale time without the lost trinkets.',
      'Something creaks behind the tall shelf…'
    ],
    outro: [
      'Story hour begins on the dot.',
      'Moss slides the last bookmark into place.',
      'Fireflies drift through the hollow tree windows.'
    ],
    levelId: 'forest-bookshop',
    unlockAfter: 'case-2-kitchen',
    hubUnlock: 'clock',
    optionalBonusCoins: 50
  },
  {
    id: 'case-4-bedroom',
    title: 'Dream Drawer Mysteries',
    client: 'Nightkeeper Luna',
    request: 'Gather bedtime keepsakes from the cozy dream bedroom.',
    intro: [
      'Moonlight pools on the quilt.',
      'Luna whispers that sleepy things wandered off again.',
      'Check drawers and the toy nook by the window.'
    ],
    outro: [
      'Every keepsake returns to its pillow.',
      'Luna dims the lantern to a soft glow.',
      'The bedroom sighs and settles.'
    ],
    levelId: 'cozy-dream-bedroom',
    unlockAfter: 'case-3-bookshop',
    hubUnlock: 'pillow',
    optionalBonusCoins: 50
  },
  {
    id: 'case-5-living-room',
    title: 'Tea for Two Cushions',
    client: 'Hostess Wren',
    request: 'Find living-room treasures before afternoon tea.',
    intro: [
      'The whimsy living room waits for guests.',
      'Wren misplaced teacups, yarn, and a pocket watch.',
      'Your cozy office next door will look lovely with new finds.'
    ],
    outro: [
      'Tea steam curls from the pot.',
      'Wren arranges cushions for visitors.',
      'The hollow feels ready for company.'
    ],
    levelId: 'whimsy-living-room',
    unlockAfter: 'case-4-bedroom',
    hubUnlock: 'teapot',
    optionalBonusCoins: 50
  }
];

export function getCaseById(caseId) {
  return cases.find((c) => c.id === caseId) ?? null;
}

export function getCaseForLevel(levelId) {
  return cases.find((c) => c.levelId === levelId) ?? null;
}

export function markCaseComplete(caseId) {
  persistCaseComplete(caseId);
}

export function isCaseUnlocked(caseDef, completedCases = loadCompletedCaseIds()) {
  if (!caseDef.unlockAfter) return true;
  return completedCases.has(caseDef.unlockAfter);
}

export function getNextCase() {
  const completed = loadCompletedCaseIds();
  return cases.find((c) => isCaseUnlocked(c, completed) && !completed.has(c.id)) ?? null;
}

export function getCompletedCaseCount() {
  const completed = loadCompletedCaseIds();
  return cases.filter((c) => completed.has(c.id)).length;
}
