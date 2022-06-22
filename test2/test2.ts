let age: number = 50;
let title: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => { return 100 + a };

// -------------------------------------//
let anything: any = -20;
anything = 'Text';
anything = {};

// -------------------------------------//
let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

// -----------------------------------//
let person: [string, number]

person = ['Max', 21];

// ----------------------------------//
enum Load {LOADING, READY};

const page =  {
  load: Load.LOADING
}

if (page.load === Load.LOADING) {
  console.log('Страница загружается');
}
if (page.load === Load.READY) {
  console.log('Страница загружена');
}

// ---------------------------//
let animal: string | number;
let service: "enable" | "disable";

// --------------------------//
function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// -------------------------//
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  }
}

const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}


const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}