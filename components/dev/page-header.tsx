import * as React from "react"
import Link from "next/link"

import { Button } from "~/components/ui/button"
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "~/components/page-header"

export function DevPageHeader() {
  return (
    <PageHeader>
      <PageHeaderHeading>DevPage</PageHeaderHeading>
      <PageHeaderDescription>This page is for development purposes only.</PageHeaderDescription>
      <PageActions>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/tours">Tours</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/blogs">Blogs</Link>
        </Button>
      </PageActions>
    </PageHeader>
  )
}
