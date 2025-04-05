import {TabLabel} from '@/components/ui/atoms';
import clsx from 'clsx';
import {MotiView} from 'moti';
import {useState} from 'react';
import {Dimensions, Pressable, View} from 'react-native';

type Props = {
  labels: string[];
  spacingX?: number;
  children?: (index: number) => React.ReactNode;
};

export const Tabs = ({labels, spacingX = 0, children}: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const TAB_WIDTH =
    (Dimensions.get('window').width - 2 * spacingX) / labels.length;

  return (
    <>
      <View className="flex-row overflow-hidden bg-white/15 rounded-xl h-10 w-full mt-2 mb-4">
        <MotiView
          from={{translateX: 0}}
          transition={{type: 'timing'}}
          animate={{translateX: activeTab * TAB_WIDTH}}
          style={{
            position: 'absolute',
            width: TAB_WIDTH,
            height: '100%',
            backgroundColor: 'rgba(255,255,255,1)',
            borderRadius: 12,
          }}
        />

        {labels.map((label, index) => {
          // const isActive = index === activeTab;

          return (
            <Pressable
              key={index}
              onPress={() => {
                setActiveTab(index);
              }}
              className={clsx('flex-1  items-center justify-center')}>
              <TabLabel
                text={label}
                currentIndex={activeTab}
                labelIndex={index}
              />
            </Pressable>
          );
        })}
      </View>
      {children && children(activeTab)}
    </>
  );
};
