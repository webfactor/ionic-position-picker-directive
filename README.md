# IonicPositionPickerDirective

Adds positionpicker functionality to any button.  
Use `[wf-position-picker]` attribute on any `<button>` element.

## Installation
- Install `npm i @webfactor/ionic-position-picker-directive`.
- Install `npm i @agm/core`.
- Add `PositionPickerDirectiveModule` to your Ionic module imports.
- Add `AgmCoreModule.forRoot({ apiKey: 'Maps-Api-Key'})` to your Ionic module imports
- Add `GeolocationServiceProvider`to your Ionic providers

- If button don´t reakt to clickEvents add `PositionPickerDirectiveModule` to your Ionic Page module imports.

## I/O
```typescript
position?: Coords
```
Show the lat/lon Position from a coords-object. Default is lat = 0, lon = 0;

```typescript
title?: string
```  
Default: 'Position auswählen'. Title for the position picker.

```typescript
zoom?: number
``` 
Default: '13'. Set the zoomlevel to the map

```typescript
streetViewControl?: boolean
```
Default: 'false'. Set if streetViewControl is shown or not.

```typescript
zoomControl?: boolean
```
Default: 'false'. Set if zoomControl is shown or not.

```typescript
backIcon?: string
```
Default: 'arrow-back'. Icon for the back-Button on the position picker modal.

```typescript
acceptIcon?: string
```
Default: 'checkmarks'. Icon for the accept-Button on the position picker modal.

```typescript
saveOnClose?: boolean
```
Default: 'false'. Remove the accept-button. Save data if modal dismiss.


```typescript
(positionPick)
```
Emits when the user click on accept button. _$event_ holds the position data.
The Object contails the choosen positiondata and if exist the old positiondata.


## Example
```html
<button ion-button 
wf-position-picker 
backIcon="pizza" 
[position]="position" 
zoomControl=true 
(positionPick)="pick($event)">
Position wählen
</button>
```

![PositionPickerButton](/images/PositionPickerExample.png)
