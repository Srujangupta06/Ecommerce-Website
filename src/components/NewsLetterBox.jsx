const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="font-medium text-xl lg:text-3xl text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </p>
      <form
        className="w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3"
        onSubmit={onSubmitHandler}
      >
        <input
          type="email"
          placeholder="Your email address"
          className="w-full outline-none sm:flex-1"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
