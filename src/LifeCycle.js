import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

// function LifecycleDemo() {
export default function Lifecycle() {
  //   // It takes a function
  //   useEffect(() => {
  //     // This gets called after every render, by default
  //     // (the first one, and every one after that)
  //     console.log('render!');

  //     // If you want to implement componentWillUnmount,
  //     // return a function from here, and React will call
  //     // it prior to unmounting.
  //     return () => console.log('unmounting...');
  //   }, []);

  //   return "I'm a lifecycle demo";
  // }

  // export default function LifeCycle() {
  //   // Set up a piece of state, just so that we have
  //   // a way to trigger a re-render.
  //   const [random, setRandom] = useState(Math.random());

  //   // Set up another piece of state to keep track of
  //   // whether the LifecycleDemo is shown or hidden
  //   const [mounted, setMounted] = useState(true);

  //   // This function will change the random number,
  //   // and trigger a re-render (in the console,
  //   // you'll see a "render!" from LifecycleDemo)
  //   const reRender = () => setRandom(Math.random());

  //   // This function will unmount and re-mount the
  //   // LifecycleDemo, so you can see its cleanup function
  //   // being called.
  //   const toggle = () => setMounted(!mounted);

  //   return (
  //     <>
  //       <button onClick={reRender}>Re-render</button>
  //       <button onClick={toggle}>Show/Hide LifecycleDemo</button>
  //       {mounted && <LifecycleDemo />}
  //     </>
  //   );

  // Initialize state to hold the posts
  const [posts, setPosts] = useState([]);

  // effect functions can't be async, so declare the
  // async function inside the effect, then call it
  useEffect(() => {
    async function fetchData() {
      // Call fetch as usual
      const res = await fetch('https://www.reddit.com/r/reactjs.json');

      // Pull out the data as usual
      const json = await res.json();

      // Save the posts into state
      // (look at the Network tab to see why the path is like this)
      setPosts(json.data.children.map(c => c.data));
    }

    fetchData();
  }, [posts]); // <-- we didn't pass a value. what do you think will happen?

  // Render as usual
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
