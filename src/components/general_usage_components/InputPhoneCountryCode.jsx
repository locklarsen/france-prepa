import React from "react";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";

const COUNTRIES = [
  "Cameroun (+237) France (+33)",
  "Germany (+49)",
  "Spain (+34)",
  "USA (+1)",
];
const CODES = ["+237", "+33", "+49", "+34", "+1"];

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
              className="h-10 w-14 shrink-0 rounded-r-none border-2 border-r-0 border-gray-500 bg-transparent px-3"
            >
              {CODES[country]}
            </Button>
          </MenuHandler>
          <MenuList className="max-h-[20rem] max-w-[18rem]">
            {COUNTRIES.map((country, index) => {
              return (
                <MenuItem
                  key={country}
                  value={country}
                  onClick={() => setCountry(index)}
                >
                  {country}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
        <Input
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={9}
          placeholder="683 61 74 24"
          className={`bg-white flex items-center w-full px-5 py-3 text-sm font-medium outline-none 400 mb-3 md:mb-0 placeholder:text-gray-700 text-dark-gray-900 border-gray-500 border-2 rounded-xl`}
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          containerProps={{
            className: "min-w-0 ",
          }}
        />
      </div>
    </div>
  );
};
export default InputPhoneCountryCode;
