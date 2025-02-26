export interface ISteps {
    language: string;
    isSkiped?: boolean
}



export interface IButton {
    text?: string;
    type: string;
    cssClasses: string;
    onClick: () => void;
}


export interface IChooseLanguage {
    setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>; 
    setIsLanguageChoosed: React.Dispatch<React.SetStateAction<boolean>>; 
}

export interface ILoader {
    language: string;
    currentStep: React.ReactNode;
}

export interface IProject {
    title: string;
    enterprice: string;
    image: string;
}
