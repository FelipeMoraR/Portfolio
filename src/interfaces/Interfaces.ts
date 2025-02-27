export interface ISteps {
    language: string;
    isSkiped?: boolean
}

export interface IPortfolio {
    language: string;
}

export interface INavbar {
    language: string;
}

export interface INavbarElement {
    key: number;
    sectionToView: string; 
    icon: string; 
    tooltip: string; 
}

export interface IPortfolioPart {
    language: string;
}

export interface ITechnologie {
    id: number;
}

export interface ITechnologieBody extends ITechnologie {
    name: string;
    image: string;
    onClick: (id: number) => void;
}

export interface ICardProject {
    title: string;
    date: Date;
    resume: string;
    description: string;
    technologies: Array<ITechnologie>;
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
