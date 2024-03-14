import { TemplateExpression } from "typescript";

export type Bowler = {
    bowlerID: number;
    bowlerFirstName: string;
    bowlerMiddleInit: string;
    bowlerLastName: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    teamID: number;
    team: {
        teamID: number;
        teamName: string;
    }
};