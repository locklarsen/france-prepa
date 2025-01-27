import React from "react";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const COUNTRIES = [
  "Algérie (+213)",
  "Bénin (+229)",
  "Burkina Faso (+226)",
  "Burundi (+257)",
  "Cameroun (+237)",
  "Cap-Vert (+238)",
  "Comores (+269)",
  "Congo Brazzaville (+242)",
  "Congo Kinshasa (+243)",
  "Côte d'Ivoire (+225)",
  "Djibouti (+253)",
  "Gabon (+241)",
  "Guinée (+224)",
  "Guinée-Bissau (+245)",
  "Madagascar (+261)",
  "Mali (+223)",
  "Mauritanie (+222)",
  "Niger (+227)",
  "Rwanda (+250)",
  "Sénégal (+221)",
  "Seychelles (+248)",
  "Tchad (+235)",
  "Togo (+228)",
];
const CODES = [
  "+213",
  "+229",
  "+226",
  "+257",
  "+237",
  "+238",
  "+269",
  "+242",
  "+243",
  "+225",
  "+253",
  "+241",
  "+224",
  "+245",
  "+261",
  "+223",
  "+222",
  "+227",
  "+250",
  "+221",
  "+248",
  "+235",
  "+228",
];

const InputPhoneCountryCode = () => {
  const [country, setCountry] = React.useState(0);

  return (
    <div className="w-full max-w-[24rem]">
      <div className="relative flex w-full">
        <Menu placement="bottom-start">
          <MenuHandler>
            <Button
              ripple={false}
              variant="text"
              color="blue-gray"
              className="shrink-0 rounded-r-none border-gray-500 border-1 border-r-0 bg-transparent px-3 flex items-center"
              style={{ width: "4rem" }} // Ajuster la largeur du bouton
            >
              {CODES[country]}
            </Button>
          </MenuHandler>
          <MenuList className="bg-[#f6aa00] max-h-[40rem] max-w-[50rem] text-gray-800 space-y-3 font-medium">
            {COUNTRIES.map((country, index) => (
              <MenuItem
                key={country}
                value={country}
                onClick={() => setCountry(index)}
                className="flex flex-col border-b-[1px] border-t-0 border-x-0 rounded-none px-2 border-gray-100"
              >
                {country}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Input
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={9}
          placeholder="683617424"
          className="w-full h-14 px-2 py-3 text-sm font-normal rounded-l-none placeholder:text-gray-700 text-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "bg-white w-full h-14",
          }}
        />
      </div>
    </div>
  );
};

export default InputPhoneCountryCode;
