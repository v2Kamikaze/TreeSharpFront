"use client";
import React, { useState } from "react";

var count = 0;

interface FormProps {
  color: string;
}

export default function Form({ color }: FormProps) {
  count++;

  console.log(count);
  let [inputText, setInputText] = useState("");

  function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    // Aqui chama controllers
  }

  function onChangeInputId(e: React.ChangeEvent<HTMLInputElement>) {
    // Atualiza o estado da view específica
    setInputText(e.target.value);
  }

  return (
    <form id= "Forms-Nó" className="">
      <div className="flex flex-col item-center items-center m-2 p-2">
      <input
        className="w-fill rounded-md m-4 text-center border-2 hover:border-rose-300"
        type="text"
        placeholder="Adicione um Nó"
        value={inputText}
        onChange={onChangeInputId}
      />
      <div className="flex flex-row space-x-0.5 text-slate-100">
        <button type="submit" 
        onClick={onClick} 
        className="rounded-s-lg bg-green-500 p-2 m-1 hover:shadow-lg hover:shadow-green-700">
          Adicionar Nó
        </button>
        <button type="submit" 
        onClick={onClick} 
        className=" rounded-r-lg bg-red-600 p-2 m-1 hover:shadow-lg hover:shadow-red-900">
          Remover Nó
        </button>
      </div>
      </div>
      
      
    </form>
  );
}
