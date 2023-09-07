"use client";

import { useEffect, useState } from "react";

export default function createRecipe() {
  const [equipmentList, setEquipmentList] = useState([
    { equipmentName: "", amount: "" },
  ]);

  const [imageList, setImageList] = useState();

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
        className="w-full"
          type="text"
          placeholder=" שם המתכון"
          name="recipeName"
          id="recipeName"
        />
        <textarea
          name="discription"
          id="discription"
          placeholder="תיאור (70 תווים todo)"
          cols="46"
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
                  className=" mr-2 w-28"
                  type="text"
                  name="amount"
                  id={index}
                  value={item.amount}
                  placeholder="כמות ומידה "
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
                  {index ? "🗑" : " "}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="w-full bg-orange-400 rounded-lg inline-flex place-content-between items-center ">
          <h3 className="font-bold">כמות המנות שיצאו -</h3>
          <input
            className=" w-10 ml-10 content-start text-center text-black"
            type="number"
            name="yald"
            min={1}
            value={1}
            placeholder="Yald - Number of servings the recipe makes"
          />
        </div>

        <div className="w-full bg-zinc-600 rounded-lg text-center mt-6 inline-flex place-content-between items-center ">
          <h3 className="font-bold w-full"> הוראות הכנה </h3>
          {/* <h3
            className="ml-2"
            onClick={() => {
              addEquipment();
            }}
          >
            +
          </h3> */}
          {/* Ingredients */}
        </div>
        <div className="w-full">
          <textarea
            name="Ingredients"
            id="Ingredients"
            cols="46"
            rows="10"
            className="border  border-fuchsia-600"
          >
            {" "}
          </textarea>
        </div>

        <div className="mt-5 bg-neutral-700 inline-flex place-content-between items-center rounded-lg w-full">
          בשרי/פרווה/חלבי?
          <select
            name="select1"
            id=""
            className="content-start mx-10 text-center"
          >
            <option value="0">בחר </option>
            <option value="1">בשרי</option>
            <option value="2" selected>
              פרווה
            </option>
            <option value="3">חלבי</option>
          </select>
        </div>
        <div className="mt-5 inline-flex bg-neutral-600 w-full rounded-lg">
          <input type="checkbox" name="privatebox" id="privatebox" />
          <p className="mx-2">פרטי?</p>
        </div>

        <div className="">
          <input
            type="file"
            name=""
            id="filecreate"
            accept="image/*"
            onChange={(e) => {
              let file = e.target.files[0];
              if (file) {
                const imageUrl = URL.createObjectURL(file);
                setImageList( imageUrl);
              }
            }}
            // onChange={(e) =>console.log(e.target.files[0])}
            className="hidden"
          />
          <label htmlFor="filecreate">upload image</label>
          </div>
          {imageList && <img src={imageList} alt="jhg"  />
           }
        {/* const [imageList, setImageList] = useState([]) */}

        {/* image 
Recipe Name
Discription
// Preparation Time

Instructions
Tags
private / public
*/}
      </form>
    </div>
  );
}
