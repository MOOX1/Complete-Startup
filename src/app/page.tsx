import { Button } from '@/components/Button';
import { Text } from '@/components/Text';
import { ActivityIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="p-5">
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
      <div className="flex w-1/4 flex-col gap-3">
        <Button.Root typeButton="Primary">
          <Button.Label> Primary </Button.Label>
          <Button.Icon icon={ActivityIcon} />
        </Button.Root>

        <Button.Root typeButton="secondary">
          <Button.Label> Secondary </Button.Label>
          <Button.Icon icon={ActivityIcon} />
        </Button.Root>

        <Button.Root typeButton="secondary" disable>
          <Button.Icon icon={ActivityIcon} />
          <Button.Label> Disable </Button.Label>
        </Button.Root>

        <Button.Root typeButton="success-primary">
          <Button.Label> Success primary </Button.Label>
          <Button.Icon icon={ActivityIcon} />
        </Button.Root>
        <Button.Root typeButton="success-secondary">
          <Button.Label> Success Secondary </Button.Label>
          <Button.Icon icon={ActivityIcon} />
        </Button.Root>

        <Button.Root typeButton="danger-primary">
          <Button.Label> Danger primary </Button.Label>
          <Button.Icon icon={ActivityIcon} />
        </Button.Root>
        <Button.Root typeButton="danger-secondary">
          <Button.Label> Danger secondary </Button.Label>
          <Button.Icon icon={ActivityIcon} />
        </Button.Root>
      </div>
    </div>
  );
}
