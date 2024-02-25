import React from 'react'
import SidebarBtnElement from './SidebarBtnElement'
import { FormElements } from './FormElements'

type Props = {}

const FormElementsSidebar = (props: Props) => {
  return (
    <div>
      Elements
    <SidebarBtnElement formElement={FormElements.TextField}/>
    </div>
  )


}

export default FormElementsSidebar