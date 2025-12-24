import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Animated, {
  FadeIn,
  FadeInUp,
  FadeInDown,
  Easing,
} from 'react-native-reanimated'

import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import Button from '@/components/Button'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter()
  return (
    <ScreenWrapper>
      <View style={styles.container}>

        {/* Login */}
        <Animated.View entering={FadeIn.duration(700)}>
          <TouchableOpacity onPress={()=> router.push('/(auth)/login')} style={styles.loginButton}>
            <Typo fontWeight="600">Sign in</Typo>
          </TouchableOpacity>
        </Animated.View>

        {/* Image */}
        <Animated.Image
          entering={FadeInUp
            .duration(1200)
            .easing(Easing.out(Easing.cubic))}
          source={require('../../assets/welcome.png')}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Footer */}
        <View style={styles.footer}>

          {/* Title */}
          <Animated.View
            entering={FadeInDown
              .duration(1100)
              .easing(Easing.out(Easing.cubic))}
            style={styles.titleBox}
          >
            <Typo size={30} fontWeight="800">Always take control</Typo>
            <Typo size={30} fontWeight="800">of your finances</Typo>
          </Animated.View>

          {/* Subtitle */}
          <Animated.View
            entering={FadeInDown
              .delay(150)
              .duration(1100)
              .easing(Easing.out(Easing.cubic))}
            style={styles.subtitleBox}
          >
            <Typo size={17} color={colors.textLight}>
              Plan your spending, save smarter,
            </Typo>
            <Typo size={17} color={colors.textLight}>
              and build a better future
            </Typo>
          </Animated.View>

          {/* Centered CTA */}
          <Animated.View
            entering={FadeInUp
              .delay(300)
              .duration(1200)
              .easing(Easing.out(Easing.cubic))}
            style={styles.buttonBox}
          >
            <Button onPress={()=> router.push('/(auth)/register')} style={styles.ctaButton}>
              <View style={{ alignItems: 'center' }}>
                <Typo size={22} fontWeight="700" color={colors.neutral900}>
                  Get Started
                </Typo>
              </View>
            </Button>
          </Animated.View>

        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Welcome

/* ---------------- STYLES ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: spacingY._10,
  },

  loginButton: {
    alignSelf: 'flex-end',
    marginRight: spacingX._20,
  },

  image: {
    width: '100%',
    height: verticalScale(270),
    alignSelf: 'center',
    marginTop: verticalScale(30),
  },

  footer: {
    backgroundColor: colors.neutral900,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: verticalScale(36),
    paddingBottom: verticalScale(50),
    alignItems: 'center',
    gap: spacingY._20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.14,
    shadowRadius: 22,
    elevation: 12,
  },

  titleBox: {
    alignItems: 'center',
  },

  subtitleBox: {
    alignItems: 'center',
    gap: 4,
  },

  buttonBox: {
    width: '100%',
    alignItems: 'center',   // ✅ centers button
    marginTop: spacingY._10,
  },

  ctaButton: {
    width: '80%',           // nice centered width
  },
})
