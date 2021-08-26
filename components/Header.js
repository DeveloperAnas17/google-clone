import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-2 shadow-md flex items-center bg-white">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="md:inline-flex h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className=" md:inline-flex ml-2 text-gray-700 text-2xl">Docs</h1>

      <div className="mx-5 md:mx-10 flex items-center flex-grow px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray" />
        <input
          className="px-5 text-base border-0 bg-transparent outline-none flex-grow"
          type="text"
          placeholder="Search"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>
      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s48-c-k-c0x00ffffff-no-rj"
        alt=""
      />
    </header>
  );
}

export default Header;
