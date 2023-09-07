"use client";

import { useEffect, useState } from "react";

export default function createRecipe() {
  const [equipmentList, setEquipmentList] = useState([
    { equipmentName: "", amount: "" },
  ]);

  // useEffect(()=>{addEquipment()},[])
  useEffect(() => {}, [equipmentList]);

  function addEquipment() {
    const index = equipmentList.length;
    //  setEquipmentList(equipmentList[index]={equipmentName:"",amount:""})
    setEquipmentList([...equipmentList, { equipmentName: "", amount: "" }]);
  }
  function updateEquipment(value, nameinlist, index) {
    const newList = [...equipmentList];
    newList[index][nameinlist] = value;
    setEquipmentList(newList);
  }

  function deleteEquipmen(index) {
    const newList = [...equipmentList];
    console.log(newList.splice(index, 1));

    setEquipmentList(newList);
  }

  return (
    <div className="w-full flex justify-center">
      <form className="even:border even:border-black items-start  m-3 flex flex-col gap-2 w-min justify-center">
        <input
          type="text"
          placeholder=" שם המתכון"
          name="recipeName"
          id="recipeName"
        />
        <textarea
          name="discription"
          id="discription"
          placeholder="תיאור (200 תווים)"
          cols="30"
          rows="5"
        ></textarea>
        <input
          type="number"
          name="preparationTime"
          min={0}
          placeholder="זמן הכנה (לדקה)"
        />
        {/* Equipment Needed */}
        <div className="bg-zinc-600 rounded-lg text-center mt-6 inline-flex place-content-between items-center ">
          <h3 className="font-bold w-80 ">רשימת מצרכים </h3>
          <span
            className="pl-2 pr-2 px-2 cursor-pointer bg-slate-300 rounded-l-lg"
            onClick={() => {
              addEquipment();
            }}
          >
            +
          </span>
        </div>
        <div className="">
          {equipmentList.map((item, index) => {
            return (
              <div
                key={index}
                className="inline-flex m-1 place-content-between items-center"
              >
                <input
                  type="text"
                  name="equipmentName"
                  id={index}
                  value={item.equipmentName}
                  placeholder="שם המצרכים"
                  onChange={(e) => {
                    updateEquipment(e.target.value, e.target.name, e.target.id);
                  }}
                />
                <input
                  className=" mr-2"
                  type="text"
                  name="amount"
                  id={index}
                  value={item.amount}
                  placeholder="כמות"
                  onChange={(e) => {
                    updateEquipment(e.target.value, e.target.name, e.target.id);
                  }}
                />
                <h3
                  id={index}
                  onClick={(e) => {
                    deleteEquipmen(e.target.id);
                  }}
                  className="font-semibold mr-1 cursor-pointer"
                >
                  {index ? "הסר" : ""}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="bg-orange-400 rounded-lg inline-flex place-content-between items-center ">
          <h3 className="font-bold">כמות המנות שיצאו -</h3>
          <input
            className=" w-10 ml-2 text-black"
            type="number"
            name="yald"
            min={1}
            value={1}
            placeholder="Yald - Number of servings the recipe makes"
          />
        </div>



        <div className="bg-zinc-600 rounded-lg text-center mt-6 inline-flex place-content-between items-center ">
          <h3 className="font-bold w-80"> הוראות הכנה </h3>
          {/* <h3
            className="ml-2"
            onClick={() => {
              addEquipment();
            }}
          >
            +
          </h3> */}
        </div>
        <div className="">
<textarea name="Ingredients" id="Ingredients" cols="42" rows="10"
className="border  border-fuchsia-600"
> </textarea>

          {/* {equipmentList.map((item, index) => {
            return (
              <div
                key={index}
                className="inline-flex m-1 place-content-between items-center"
              >
                <input
                  type="text"
                  name="equipmentName"
                  id={index}
                  value={item.equipmentName}
                  placeholder="פעולה
                   "
                  onChange={(e) => {
                    updateEquipment(e.target.value, e.target.name, e.target.id);
                  }}
                />
            
                <h3
                  id={index}
                  onClick={(e) => {
                    deleteEquipmen(e.target.id);
                  }}
                  className="font-semibold mr-1"
                >
                  {index ? "הסר" : ""}
                </h3>
              </div>
            );
          })} */}
        </div>
        {/* image 
Recipe Name
Discription
Preparation Time
Ingredients
Instructions
Tags
private / public
*/}
      </form>
    </div>
  );
}
