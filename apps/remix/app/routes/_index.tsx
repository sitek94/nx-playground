import { Button } from '@/libs/ui';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>{`Welcome to Remix! (color of <h1> from libs/ui/styles)`}</h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button>
          DEFAULT button from <strong>libs/ui</strong>
        </Button>
        <Button color="primary">
          PRIMARY button from <strong>libs/ui</strong>
        </Button>
        <Button color="secondary">
          SECONDARY button from <strong>libs/ui</strong>
        </Button>
      </div>
    </div>
  );
}
