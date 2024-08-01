import React from 'react'
import { FcTodoList, FcDataEncryption } from "react-icons/fc";
import { SiLibreofficewriter } from "react-icons/si";
import { IoBookSharp } from "react-icons/io5";
import ReportIcon from '../../../components/common/icons/ReportIcon';

function BoxWrapper({ children }) {
    return (
        <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center justify-center flex-grow">
            {children}
        </div>
    );
}

function Reports() {
    return (
       <div>
        </div>
    );
}

export default Reports;
