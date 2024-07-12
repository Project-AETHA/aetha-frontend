import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useSwitch } from '@nextui-org/react';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

export function ThemeSwitcher(props) {
    const { setTheme } = useTheme();
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setTheme(isChecked ? 'dark' : 'light');
    }, [isChecked]);

    const {Component} = useSwitch(props);

    return (
        <div className="flex flex-col gap-2">
            <Component className="hover:cursor-pointer">
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200">
                    {isChecked ? <SunIcon/> : <MoonIcon/>}
                </div>
            </Component>
        </div>
    );
}