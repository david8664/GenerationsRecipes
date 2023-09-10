"use client";

import { useEffect, useState } from "react";

export default function createRecipe() {
  const [createData, setCreateData] = useState([]);
  const [equipmentList, setEquipmentList] = useState([
    { equipmentName: "", amount: "" },
  ]);

  const [imageUrl, setImageUrl] = useState();

  // useEffect(()=>{addEquipment()},[])
  useEffect(() => {
    let equipment = equipmentList;
    let data = createData;
    data.equipmentList = equipment;
    setCreateData(data);
  }, [equipmentList]);

function updateToCreateData(name,value) {
  let updateAt = value;
  let data = createData;
  data[name] = updateAt;
  setCreateData(data);
}

  function addEquipment() {
    const index = equipmentList.length;
    setEquipmentList([
      ...equipmentList,
      (equipmentList[index] = { equipmentName: "", amount: "" }),
    ]);
    // setEquipmentList([...equipmentList, { equipmentName: "", amount: "" }]);
    // setCreateData([...createData,createData.equipmentList=equipmentList])
  }
  function updateEquipment(value, nameinlist, index) {
    const newList = [...equipmentList];
    newList[index][nameinlist] = value;
    setEquipmentList(newList);

    // setCreateData([...createData,createData.equipmentList=equipmentList])
  }

  function deleteEquipmen(index) {
    const newList = [...equipmentList];
    newList.splice(index, 1);

    setEquipmentList(newList);
  }

  return (
    <div className="w-full flex justify-center">
      <form className=" items-start  m-3 flex flex-col gap-2 w-min justify-center">
        <p className="bg-zinc-600 w-full text-center rounded-lg text-rose-50">
          שם המתכון-
        </p>
        <input
          className="w-full"
          type="text"
          placeholder=" שם המתכון"
          name="recipeName"
          id="recipeName"
          value={createData.recipeName}
          onChange={(e) => {
            updateToCreateData(e.target.name, e.target.value.trim())
          }}
        />
        <p onClick={()=>{console.log(createData)}}>click here to see all data</p>
        <p className="bg-zinc-600 w-full rounded-lg text-rose-50 text-center mt-6">
          תיאור המתכון בקצרה
        </p>
        <textarea
          name="discription"
          id="discription"
          placeholder="תיאור (70 תווים todo)"
          cols="46"
          rows="5"
          value={createData.discription}
          onChange={(e) => {
            updateToCreateData(e.target.name, e.target.value.trim())
          }}
        ></textarea>
 {/* preparation Time */}
        <p className="text-rose-50 text-center w-full bg-zinc-600 mt-10 rounded-lg">
          זמן ההכנה (בדקות)
        </p>
        <input
          type="number"
          name="preparationTime"
          min={0}
          value={createData.preparationTime}
          placeholder="זמן הכנה (לדקה)"
          onChange={(e) => {
            updateToCreateData(e.target.name, e.target.value.trim())
          }}
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
            value={createData.yald}
            placeholder="הכנס/י מספר"
            onChange={(e) => {
              updateToCreateData(e.target.name, e.target.value.trim())
            }}
          />
        </div>

        <div className="w-full bg-zinc-600   text-rose-50 rounded-lg text-center mt-6 inline-flex place-content-between items-center ">
          <h3 className="font-bold w-full"> הוראות הכנה </h3>
    
        </div>
        <div className="w-full">
          <textarea
            name="ingredients"
            id="ingredients"
            cols="46"
            rows="10"
            className="border  border-black"
            value={createData.ingredients}
            onChange={(e) => {
              updateToCreateData(e.target.name, e.target.value.trim())
            }}
          >
            
          </textarea>
        </div>

        <div className="mt-5 bg-zinc-600 text-rose-50 font-bold inline-flex place-content-between items-center rounded-lg w-full">
          בשרי/פרווה/חלבי?
          <select
            name="bhp"
            id="bhp"
            value={createData.bhp}
            className="content-start text-black mx-10 text-center"
            onChange={(e) => {
              updateToCreateData(e.target.name, e.target.value.trim())
            }}
          >
            <option value="0" unselectable="on">בחר </option>//??????????????????????????????????????
            <option value="besari">בשרי</option>
            <option value="parve" selected>
              פרווה
            </option>
            <option value="halavi">חלבי</option>
          </select>
        </div>
        <div className="mt-5 inline-flex bg-zinc-600 w-full rounded-lg">
          <input
            className="mr-2"
            type="checkbox"
            name="privatebox"
            id="privatebox"
            value={createData.privatebox}
            onChange={(e) => {
              updateToCreateData(e.target.name, e.target.value.trim())
            }}
          />
          <p className="mx-2 text-rose-50 font-bold">המתכון פרטי?</p>
        </div>

        <p className=" bg-zinc-600 w-full rounded-lg text-rose-50 text-center mt-6 font-bold">
          תמונת המתכון
        </p>
        <div className="">
          <input
            type="file"
            name="imageOfRecipe"
            id="filecreate"
            accept="image/*"
            onChange={(e) => {
              let file = e.target.files[0];
              if (file) {
                const newImageUrl = URL.createObjectURL(file);
                setImageUrl(newImageUrl);
                updateToCreateData(e.target.name, newImageUrl);
              }
            }}
            // onChange={(e) =>console.log(e.target.files[0])}
            className="hidden"
          />
          <label htmlFor="filecreate"> 📷- העלאה</label>
        </div>
        {imageUrl && <img src={imageUrl} alt="imageOfRecipe" width={"auto"} />}
        {/* const [imageList, setImageList] = useState([]) */}

        {/* image 
Recipe Name
discription  !


Instructions
Tags
private / public  !
*/}
      </form>
    </div>
  );
}
