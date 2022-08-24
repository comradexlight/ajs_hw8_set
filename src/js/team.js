export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(сharacter) {
    if (this.members.has(сharacter)) {
      throw new Error('Этот персонаж уже в команде');
    }
    this.members.add(сharacter);
  }

  addAll(...сharacters) {
    for (const сharacter of сharacters) {
      this.add(сharacter);
    }
  }

  toArray() {
    const teamArray = Array.from(this.members);
    return teamArray;
  }
}
