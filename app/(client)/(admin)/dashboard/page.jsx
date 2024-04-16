// "use client";
// import React, { useState } from "react";
// import api from "@/lib/apiCalls";

// export default function AdminPage() {
//   const [tags, setTags] = useState([]);
//   const [errors, setErrors] = useState("");
//   const [currentTag, setCurrentTag] = useState("");

//   const handleAddTag = () => {
//     if (
//       /^([a-zA-Z]+(?: [a-zA-Z]+)*|[א-ת]+(?: [א-ת]+)*)$/.test(currentTag.trim())
//     ) {
//       // Check if the tag is not already in the tags array before adding it
//       if (!tags.includes(currentTag.trim())) {
//         setTags([...tags, currentTag.trim()]);
//         setCurrentTag("");
//       } else {
//         setErrors("התג כבר קיים.");
//       }
//     } else {
//       setErrors("פורמט לא תקין.");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior
//     if (tags.length < 1) {
//       setErrors("נא להכניס תג.");
//       return;
//     }
//     try {
//       await api.post("r/tags", { tags: tags });
//       setErrors("עודכן בהצלחה"); // Clear errors on successful submit
//     } catch (error) {
//       const response = error.request.response;
//       setErrors(
//         `יש פה כבר תג קיים: ${response.slice(46, response.length - 2)}`
//       );
//     }
//   };

//   const handleInputChange = (event) => {
//     setCurrentTag(event.target.value);
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Prevent the default form submission behavior
//       handleAddTag();
//     }
//   };

//   const handleRemoveTag = (tagToRemove) => {
//     setTags(tags.filter((tag) => tag !== tagToRemove));
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-4 px-2">
//       <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
//         <label
//           htmlFor="addTags"
//           className="block text-sm font-medium text-gray-700"
//         >
//           הוספת תגים
//         </label>
//         <div className="mt-1">
//           <input
//             type="text"
//             name="addTags"
//             id="addTags"
//             value={currentTag}
//             onChange={handleInputChange}
//             onKeyDown={handleKeyPress}
//             className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//             placeholder="הזן תגים להוספה"
//           />
//         </div>
//         <table className="mt-4 w-full text-left border-collapse">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
//                 תגים
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {tags.map((tag, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                   {tag}
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveTag(tag)}
//                     className="ml-2 text-sm text-red-500 pr-4"
//                   >
//                     הסר
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className="flex justify-between mt-4">
//           <button
//             type="button"
//             onClick={handleAddTag}
//             className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             הוספה
//           </button>
//           <button
//             type="submit"
//             className="ml-3 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//           >
//             עדכן תגים
//           </button>
//         </div>
//       </form>
//       {errors && <p className="mt-2 text-sm text-red-600">{errors}</p>}
//     </div>
//   );
// }
"use client";
import { RoleGate } from "@/components/auth/role-gate";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentUser } from "@/hooks/use-current-user";
import FormSuccess from "@/components/form-success";

const AdminPage = () => {
  // TODO: Add Admin options to add tags, and see all tags & send emails to users by nickname or email (Two pages).
  const role = useCurrentUser()?.role;
  return (
    <Card className="w-1/2">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">ניהול</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate>
          <FormSuccess message="יש לך הרשאה לגשת לדף זה!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin Page</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
