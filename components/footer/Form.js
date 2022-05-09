import React from "react";

function Form({ status, message, onValidated }) {
  let email;
  const submit = () => {
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
  };
  console.log(status);
  return (
    <div className=" flex flex-col space-y-2 items-center justify-center">
      <p className="text-[#D4D7D1] md:text-sm text-base tracking-wide  text-center lg:text-xs">
        Subscribe to our newsletter to get updates and amazing tips
      </p>
      <div className="flex">
        <input
          className="lg:w-96 w-full md:w-80 text-white rounded-sm bg-[#2C2C2C] mr-2 p-4 outline-none "
          // value={sub}
          // onChange={(e) => setSub(e.target.value)}
          type="email"
          ref={(node) => (email = node)}
          placeholder="Enter your email here"
        />
        <button
          onClick={submit}
          className="bg-bellefuOrange rounded-sm hover:bg-orange-300 lg:py-4 md:rounded-bl-sm md:rounded-tl-sm px-4 py-2 lg:px-8 text-white"
        >
          Send
        </button>
      </div>
      {status === "sending" && <div className="bg-bellefuOrange">sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
}

export default Form;
