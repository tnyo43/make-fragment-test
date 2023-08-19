import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
import { FragmentType } from "../gql";

type Primitive = null | undefined | string | number | boolean | symbol | bigint;

type UnmaskedDocument<TDoc> = TDoc extends {
  " $fragmentRefs"?: infer FragmentRefs;
}
  ? FragmentRefs extends Record<string, infer FragmentRef>
    ? UnmaskedDocument<
        FragmentRef & Omit<TDoc, " $fragmentRefs" | " $fragmentName">
      >
    : never
  : TDoc extends Primitive
  ? TDoc
  : { [key in keyof TDoc]: UnmaskedDocument<TDoc[key]> };

export function customMakeFragmentData<
  Fragment extends DocumentTypeDecoration<unknown, unknown>
>(data: UnmaskedDocument<FragmentType<Fragment>>, _fragment: Fragment) {
  return data as FragmentType<Fragment>;
}
