declare interface IBootstrapTableWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'BootstrapTableWebPartStrings' {
  const strings: IBootstrapTableWebPartStrings;
  export = strings;
}
