const CreateProductSection = () => {
  return (
    <section className="w-full px-10">
      <h1>Create Product</h1>
      <form
        action=""
        className="border border-black/50 rounded-lg w-full flex flex-col"
      >
        <input type="text" placeholder="Product Name" />
        <input type="text" placeholder="Product Description" />
        <input type="text" placeholder="Product Price" />
        <input type="file" />
        <input type="submit" value="Create Product" />
      </form>
    </section>
  );
};

export default CreateProductSection;
