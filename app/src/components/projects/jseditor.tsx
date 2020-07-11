import React from "react";

const JsEditor: React.FunctionComponent = () => {
  return (
    <div className="project">
      <h3 className="project-title">JS Editor</h3>
      <p>
        Yes, there are a lot of editors out there that we use in our daily
        programming tasks. But what will be it like to create our own code
        editor? Yup I done this project to get a taste of what it will be to
        create our own code editor. Ofcourse it won't have that much
        functionality that other professional editors offer but, hey its our own
        editor right? our own baby!!!
      </p>
      <p>
        As usual, I choose <b>React JS</b> with <b>TypeScript</b> as my
        programming language of choice as this is going to work on client side
        browser. For coding area, I had used codemirror package which will
        provide styles for JavaScript code and to format the code, I had used
        js-beautify, which will add formating and intentation to code that we
        enter.
      </p>
      <p>
        You can view full project source code in my{" "}
        <a href="https://github.com/josinho101/js-editor" target="_blank">
          github
        </a>{" "}
        repository and project{" "}
        <a href="https://josinho101.github.io/js-editor/" target="_blank">
          demo
        </a>{" "}
        here.
      </p>
      <h5>Screenshots</h5>
      <div className="article-big-image">
        <img
          className="medium-image"
          src="/contents/images/projects/js-editor/error.png"
        />
        <img
          className="medium-image"
          src="/contents/images/projects/js-editor/result.png"
        />
      </div>
      <p>
        And finally, what is the goal of this project? to execute the JavaScript
        code that we enter and get the result right? Luckly JavaScript has a
        built in function <em>eval()</em> which I can use to execute JavaScript.
        So to execute the code entered by user, I had added a error handling
        mechanism and pass in the user code to eval function and listen for
        result. If there is any error, I will handle it and show in error
        console, otherwise I will display the result in result view.
      </p>
      <p>So here it is my own simple JavaScript editor :)</p>
    </div>
  );
};

export default JsEditor;
