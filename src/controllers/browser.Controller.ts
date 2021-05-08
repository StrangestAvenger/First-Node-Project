import { Body, Post, Route, Get, Controller } from 'tsoa'
// import * as fs from 'fs/promises'
import { watch } from 'fs';

@Route('/')
export class BrowserController extends Controller {

    @Get('/test')
    public async test(): Promise<any> {
        return Promise.resolve('hello');
    }

    @Get('/filechanges')
    public async fileChanges(): Promise<any> {
        //to watch for any changes happening in a file.
        watch('path_of_file', (eventType, filename) => {
            console.log(`event type is: ${eventType}`);
            if (filename) {
                // console.log(`filename provided: ${filename}`);
                return Promise.resolve(filename);
            } else {
                // console.log('filename not provided');
                return Promise.resolve("No file found");
            }
        });
    }
}