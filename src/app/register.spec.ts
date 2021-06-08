import { Register } from './register';

describe('Register', () => {
  it('should create an instance', () => {
    expect(new Register("Amit","kumar",1,"male","enig")).toBeTruthy(); 
  });
});
