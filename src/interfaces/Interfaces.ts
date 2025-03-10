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

export interface ITechnologieCard extends ITechnologie {
    name: string;
    image: string; 
}

export interface ICardProject{
    id: number;
    title: string;
    image: string;
    description: string;
    technologies: Array<ITechnologieCard>;
    githubRedirection: string;
    youtubeRedirection?:string; 
}



export interface IButton {
    text?: string;
    type: "submit" | "reset" | "button" | undefined;
    icon?: string;
    cssClasses: string;
    typeBtn: string;
    disabled?: boolean;
    onClick?: () => void;
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

export interface IIcon {
    id: number;
    title: string;
    image: string;
    color: string;
    redirection?: string;
    typeRedirection?: string;
    hasToolTip: boolean;
    
}

export interface IContact extends IPortfolioPart{}


export interface IModal {
    showModal: boolean;
    title: string; 
}


export interface IFormValues {
    email: string,
    errorEmail: string,
    username: string,
    errorUsername: string,
    message: string
    errorMessage: string
}