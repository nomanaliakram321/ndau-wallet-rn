/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContactSupport from '../screens/ContactSupport'

const Stack = createNativeStackNavigator()
const ContactSupportStack = ()  => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ContactSupport' component={ContactSupport} />
    </Stack.Navigator>
  )
}

export default ContactSupportStack
