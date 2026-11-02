import { createContext } from "react";

interface MyContextValue  {
  userSelection: string;
  setUserSelection: (value: string)=> void;
};

interface MyScoreValue  {
  score: number;
  setScore: (value: number)=> void;
}

interface MyBonus {
  bonus: boolean;
  setBonus: (value: boolean)=> void
}
 const myContext = createContext<MyContextValue>({
  userSelection: "",
  setUserSelection: ()=> {},
 });

 const myScore = createContext<MyScoreValue>({
  score: sessionStorage.getItem("score") ? parseInt(sessionStorage.getItem("score") as string) : 0,
  setScore: ()=> {},
 })

 const myBonus = createContext<MyBonus>({
  bonus: false,
  setBonus: ()=> {}
 })

export { myContext, myScore, myBonus }