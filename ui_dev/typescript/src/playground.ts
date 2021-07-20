// type AppleLiteralType = string;
// type AppleLiteralType = LiteralIsStringType<AppleLiteral>;

//   type NeverLiteralType = LiteralIsStringType<"aaa">;
type Prop = 'name' | 'age';
type Apple = 'Apple' | null | boolean | 'Green Apple';

type CondType<T> = T extends Prop ? T : never;

type filtered = CondType<keyof { name: string; age: number; es: null }>;
