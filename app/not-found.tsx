import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-2/3'>
      <h2>לא נמצא</h2>
      <p>אין ביכולתנו למצוא את העמוד המובקש</p>
      <Link className='bg-blue-800' href="/">חזרה לעמוד הבית</Link>
    </div>
  )
}