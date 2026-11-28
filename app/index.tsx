import { Text, useColorScheme, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PLACEHOLDER_LABEL, SERIES } from '../src/catalog';
import { themes } from '../src/theme';

const firstSeries = SERIES[0];
const firstEpisode = firstSeries.episodes[0];

export default function FirstOpen() {
  const theme = themes[useColorScheme() === 'dark' ? 'dark' : 'light'];

  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.color.backdrop, alignItems: 'center' }}>
      <View
        testID="episode-placeholder"
        style={{
          flex: 1,
          width: '100%',
          maxWidth: height * theme.playerRatio,
          backgroundColor: theme.color.surface,
          justifyContent: 'space-between',
          padding: theme.spacing.large,
        }}
      >
        <Text style={{ color: theme.color.muted, fontSize: theme.type.caption, lineHeight: theme.type.captionLeading }}>
          Episode {firstEpisode.number} of {firstSeries.episodes.length}
        </Text>
        <Text style={{ color: theme.color.muted, fontSize: theme.type.caption, lineHeight: theme.type.captionLeading }}>
          {PLACEHOLDER_LABEL}
        </Text>
        <View style={{ gap: theme.spacing.small }}>
          <Text accessibilityRole="header" style={{
            color: theme.color.text,
            fontSize: theme.type.title,
            lineHeight: theme.type.titleLeading,
            fontWeight: theme.weight.bold,
          }}>
            {firstSeries.title}
          </Text>
          <Text style={{ color: theme.color.muted, fontSize: theme.type.body, lineHeight: theme.type.bodyLeading }}>
            {firstEpisode.title}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
