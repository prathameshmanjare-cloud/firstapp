import AddTask from '../components/AddTask';
import BackgroundVideo from '../components/BgVideo';
import TodoList from '../components/TodoList';

export default function Task() {
  
  return (
    
    < main className='absolute top-0 left-0 w-full h-full object-cover' style={{ backgroundImage: "url('/bgimage.png')"}} >
      <div className="max-w-4xl mx-auto  mt-4" >
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-white">Todo List App</h1>
          <AddTask/>  
        </div>
         <TodoList/>
      </div>
    </main>
  );
}