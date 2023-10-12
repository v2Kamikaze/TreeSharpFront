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
    <form className="flex flex-col">
      <input
        className="w-48 shadow-md rounded-md m-4"
        type="text"
        placeholder="Texto"
        value={inputText}
        onChange={onChangeInputId}
      />
      <button type="submit" onClick={onClick}>
        Clique aqui
      </button>
    </form>
  );
}
