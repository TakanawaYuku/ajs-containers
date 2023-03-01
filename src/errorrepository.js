export const errors = [
  [10, 'Invalid name entered!'],
  [20, 'It is impossible to raise the level of the deceased!'],
  [30, 'It is impossible to calculate the level of the characters life. The character died!'],
  [40, 'This character already exists in the team!'],
];
export default class ErrorRepository {
  constructor() {
    this.errors = new Map(errors);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }

  // translate(code) {
  //   if (this.errors.has(code)) {
  //     this.errors.get(code);
  //   } else {
  //     return 'Unknown error';
  //   }
  // }
}
