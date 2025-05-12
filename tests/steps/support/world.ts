import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Page, Browser, BrowserContext } from "@playwright/test";

export interface CustomWorld extends World {
  page?: Page;
  browser?: Browser;
  context?: BrowserContext;
}

class PlaywrightWorld extends World implements CustomWorld {
  page?: Page;
  browser?: Browser;
  context?: BrowserContext;
}

setWorldConstructor(PlaywrightWorld);