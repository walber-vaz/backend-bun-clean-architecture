export interface IUserCase<I, O> {
  execute(input: I): Promise<O>;
}
