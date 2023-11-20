import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { ActivityIcon } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Text.Heading type="H1">hello word H1 </Text.Heading>
      <Text.Heading type="H2">hello word H2 </Text.Heading>
      <Text.Heading type="H3">hello word H3 </Text.Heading>
      <Text.Heading type="H4">hello word H4 </Text.Heading>
      <Text.Heading type="H5">hello word H5 </Text.Heading>
      <Text.Heading type="H6">hello word H6 </Text.Heading>

      <p>---------------------</p>
      <Text.Body type="Regular">Hello word Body Regular </Text.Body>
      <Text.Body type="Semibold">Hello word Body Semi bold</Text.Body>

      <Text.Caption type={'Regular'}>Hello word Caption Regular</Text.Caption>
      <Text.Caption type="Semibold">Hello word Caption Semi bold</Text.Caption>
      <Text.Caption type="Uppercase">
        Hello word Caption Semi bold large
      </Text.Caption>

      <Text.Footer type="Regular"> Hello word Footer Regular</Text.Footer>
      <Text.Footer type="Semibold"> Hello word Footer Semi bold</Text.Footer>
      <Text.Footer type="Uppercase">
        Hello word Footer Semi bold uppercase
      </Text.Footer>
      <Button.Primary label="Primary" icon={ActivityIcon} />
    </div>
  );
}
