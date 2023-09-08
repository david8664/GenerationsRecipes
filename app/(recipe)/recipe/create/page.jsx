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
      <form className=" items-start  m-3 flex flex-col gap-2 w-min justify-center">
        <p className="bg-zinc-600 w-full text-center rounded-lg text-rose-50">שם המתכון-</p>
        <input
        className="w-full"
          type="text"
          placeholder=" שם המתכון"
          name="recipeName"
          id="recipeName"
        />
        <p className="bg-zinc-600 w-full rounded-lg text-rose-50 text-center mt-6">תיאור המתכון בקצרה</p>
        <textarea
          name="discription"
          id="discription"
          placeholder="תיאור (70 תווים todo)"
          cols="46"
          rows="5"
        ></textarea>

        <p className="text-rose-50 text-center w-full bg-zinc-600 mt-10 rounded-lg">זמן ההכנה (בדקות)</p>
        <input
          type="number"
          name="preparationTime"
          min={0}
          placeholder="זמן הכנה (לדקה)"
        />
        {/* Equipment Needed */}
        <div className="bg-zinc-600 rounded-lg text-center mt-10 inline-flex place-content-between items-center ">
          <h3 className="font-bold text-rose-50 w-80 ">רשימת מצרכים </h3>
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
                  className=" mr-2 w-32"
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
        <div className="w-full bg-zinc-600 rounded-lg mt-10 inline-flex place-content-between items-center ">

        {/* Yald - Number of servings the recipe makes */}
          <p className="font-bold text-rose-50 pr-2">כמות המנות שיצאו -</p>
          <input
            className=" w-15 ml-6 rounded-lg content-start text-center text-black"
            type="number"
            name="yald"
            min={1}
            // value={1}
            placeholder="הכנס/י מספר"
          />
        </div>

        <div className="w-full bg-zinc-600   text-rose-50 rounded-lg text-center mt-6 inline-flex place-content-between items-center ">
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
            className="border  border-black"
          >
            {" "}
          </textarea>
        </div>

        <div className="mt-5 bg-zinc-600 text-rose-50 font-bold inline-flex place-content-between items-center rounded-lg w-full">
          בשרי/פרווה/חלבי?
          <select
            name="select1"
            id=""
            className="content-start text-black mx-10 text-center"
          >
            <option value="0">בחר </option>
            <option value="1">בשרי</option>
            <option value="2" selected>
              פרווה
            </option>
            <option value="3">חלבי</option>
          </select>
        </div>
        <div className="mt-5 inline-flex bg-zinc-600 w-full rounded-lg">
          <input className="mr-2" type="checkbox" name="privatebox" id="privatebox" />
          <p className="mx-2 text-rose-50 font-bold">המתכון פרטי?</p>
        </div>


          <p className=" bg-zinc-600 w-full rounded-lg text-rose-50 text-center mt-6 font-bold">תמונת המתכון</p>
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
          <label htmlFor="filecreate"> 📷- העלאה</label>
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
