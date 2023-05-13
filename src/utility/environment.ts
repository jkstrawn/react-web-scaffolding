
enum EnvironmentLevel {
    development,
    production
}

export default class Environment {
    static level: EnvironmentLevel = EnvironmentLevel.development;

    static init() {
        switch (process.env.NODE_ENV) {
            case "production":
                this.level = EnvironmentLevel.production;
                break;
            default:
                this.initDebug();
                break;
        }
    }

    private static initDebug() {

    }

    static get isProd(): boolean {
        return this.level == EnvironmentLevel.production;
    }

    static get notesUrl(): string { return `${this.serverUrl}/notes`; }

    static get serverUrl(): string {
        if (this.level == EnvironmentLevel.development) {
            return "http://localhost:3000";
        }

        return "";
    }
}