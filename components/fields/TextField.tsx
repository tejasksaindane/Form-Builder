"use client";

import { ElementsType, FormElement } from "../FormElements";
import { MdOutlineTextFields, MdTextFields } from "react-icons/md";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
        extraAttributes: {
            label: "Text field",
            helperText: "Helper Text",
            required: false,
            placeHolder: "Value here...",
        },
    }),
    designerBtnElement: {
        icon: MdTextFields,
        label:"Text Field",
    },
  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>Designer Component</div>,
  propertiesComponent: () => <div>Designer Component</div>,
};
