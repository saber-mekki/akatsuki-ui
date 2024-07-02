# AkatsukiUI

![npm](https://img.shields.io/npm/v/akatsuki-ui) ![npm bundle size](https://img.shields.io/bundlephobia/min/akatsuki-ui)

**AkatsukiUI** is a dynamic UI component library for React that allows customization according to customer needs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the library using npm:
```bash
npm install akatsuki-ui
```
Or using yarn:
```bash
yarn add akatsuki-ui
```
## Usage
Import the desired components into your project and start using them:
```javascript
import React from 'react';
import { Button } from 'akatsuki-ui';

const App = () => (
<div>
<Button primary label="Click Me" />
</div>
);
export default App;
```
## Components
### Button
A basic button component with different styles.
**Props:**
- `primary` (boolean): If true, applies the primary style.
- `backgroundColor` (string): Sets the background color of the button.
- `size` (string): Size of the button. Options are `small`, `medium`, `large`.
- `label` (string): The text label of the button.
- `onClick` (function): Click event handler.
**Example:**
```javascript
<Button primary label="Primary Button" onClick={() => alert('Clicked!')} />
```
### More Components
- **Menu**: A Menu component.

For a full list of components and their usage, please refer to the
[documentation](https://github.com/saber-mekki/akatsuki-ui/wiki).
## Customization
You can customize the components using CSS or styled-components. Here's an example of
customizing the Button component:
```javascript
import styled from 'styled-components';
import { Button } from 'akatsuki-ui';
const CustomButton = styled(Button)`
background-color: #ff0000;
border-radius: 10px;
`;
const App = () => (
<div>
<CustomButton label="Custom Button" />
</div>
);
export default App;
```
## Contributing
We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

---
© 2024 AkatsukiUI. All rights reserved.